# Twilio OTP Service API 📱✉️

This API allows you to generate and send one-time passwords (OTP) to a specified phone number using Twilio. The OTP is then returned to be verified in your own way.

## Table of Contents
- [Authentication](#authentication) 🔐
- [Endpoint](#endpoint) 🌐
- [Request](#request) 🚀
- [Response](#response) 📬
- [Example](#example) 💡
- [Contributing](#contributing) 💡

## Authentication

To use this API, you need to have a Twilio account and obtain your Account SID, Auth Token, and a Twilio phone number. Make sure to keep your credentials secure.

## Endpoint

- **Endpoint:** `/sendOTP` 📤
- **Method:** `POST`
- **Request Body:**
  
  ```json
  {
    "phonenumber": "1234567890"
  }
  ```

## Request

- Body should be a JSON object with the following parameter:
  - `phonenumber`: The destination phone number to receive the OTP.

  Example:
  ```json
  {
    "phonenumber": "1234567890"
  }
  ```

## Response

- The response will be a JSON object containing the OTP in a string format.

  Example:
  ```json
  {
    "otp": "123456"
  }
  ```

- The OTP will be a 6-digit string.

- In case of an error, appropriate error messages will be returned.

## Example

### Request
```bash
curl -X POST -H "Content-Type: application/json" -d '{"phonenumber": "1234567890"}' https://otpapi-uufh.onrender.com/sendOTP
```

### Response
```json
{
  "otp": "654321"
}
```

## Contributing

Feel free to contribute to the development of this API by submitting issues or pull requests.
