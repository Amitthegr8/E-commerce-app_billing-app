pipeline {
    agent any

    environment {
        COMPOSE_PROJECT_NAME = "billing-app"
    }

    stages {

// checkout code is handled by jenkins ui
//         stage('Checkout Code') {
//             steps {
//                 git branch: 'feature/dockerCompose',
// ',
//                 // url: 'https://github.com/YOUR_USERNAME/YOUR_REPO.git'
//                 url: "https://github.com/Amitthegr8/E-commerce-app-billing-app.git"
//             }
//         }

        stage('Stop Existing Containers') {
            steps {
                sh 'docker compose down || true'
            }
        }

        stage('Build Docker Images') {
            steps {
                sh 'docker compose build'
            }
        }

        stage('Start Application') {
            steps {
                sh 'docker compose up -d'
            }
        }

        stage('Verify Running Containers') {
            steps {
                sh 'docker ps'
            }
        }
    }

    post {
        success {
            echo '✅ Billing app deployed successfully'
        }
        failure {
            echo '❌ Deployment failed'
        }
    }
}
