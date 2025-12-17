pipeline {
    agent any

    stages {

        stage('Cleanup Old Containers') {
            steps {
                sh '''
                docker rm -f billing-frontend billing-backend billing-mysql || true
                docker network rm billing-network || true
                '''
            }
        }

        stage('Create Network') {
            steps {
                sh 'docker network create billing-network || true'
            }
        }

        stage('Build Images') {
            steps {
                sh '''
                docker build -t billing-backend ./backend
                docker build -t billing-frontend ./frontend
                '''
            }
        }

        stage('Run MySQL') {
            steps {
                sh '''
                docker volume create mysql-data || true
                docker run -d \
                  --name billing-mysql \
                  --network billing-network \
                  -e MYSQL_ROOT_PASSWORD=rootpassword \
                  -e MYSQL_DATABASE=billing_db \
                  -e MYSQL_USER=billing_user \
                  -e MYSQL_PASSWORD=billing_password \
                  -p 3307:3306 \
                  -v mysql-data:/var/lib/mysql \
                  -v $WORKSPACE/database/init.sql:/docker-entrypoint-initdb.d/init.sql \
                  mysql:8.0
                '''
            }
        }

        stage('Run Backend') {
            steps {
                sh '''
                docker run -d \
                  --name billing-backend \
                  --network billing-network \
                  -e SPRING_PROFILES_ACTIVE=docker \
                  -e DB_HOST=billing-mysql \
                  -e DB_PORT=3306 \
                  -p 8080:8080 \
                  -v $WORKSPACE/backend/uploads:/app/uploads \
                  -v $WORKSPACE/backend/logs:/app/logs \
                  billing-backend
                '''
            }
        }

        stage('Run Frontend') {
            steps {
                sh '''
                docker run -d \
                  --name billing-frontend \
                  --network billing-network \
                  -p 3000:80 \
                  billing-frontend
                '''
            }
        }

        stage('Verify') {
            steps {
                sh 'docker ps'
            }
        }
    }

    post {
        success {
            echo '✅ Billing app deployed using pure Docker'
        }
        failure {
            echo '❌ Deployment failed'
        }
    }
}
