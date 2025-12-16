package in.amitPandey.billingsoftware.service;

import com.razorpay.RazorpayException;
import in.amitPandey.billingsoftware.io.RazorpayOrderResponse;

public interface RazorpayService {

    RazorpayOrderResponse createOrder(Double amount, String currency) throws RazorpayException;
}
