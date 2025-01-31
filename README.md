# Weather App API Documentation

Bu loyiha ob-havo ma'lumotlarini olish, foydalanuvchilarni ro'yxatdan o'tkazish va tizimga kirish imkoniyatini beruvchi API-larni taqdim etadi.

## get weather by countries

**Endpoint:** `GET https://tgqh7p-1478.csb.app/weather/?countries=uzbekistan,pakistan,samarqand`

#### Request:
- **Method:** GET
#### Responses:
- **Name:** succes
- **Status Code:** 200 (OK)
- **Body:**
  ```json
{
    "message": "Success",
    "data": [
        {
            "name": "Tashkent",
            "country": "Uzbekistan",
            "lat": 41.317,
            "lon": 69.25,
            "temp_c": 2.1,
            "temp_color": "#D1F2D3",
            "wind_kph": 7.9,
            "wind_color": "#E0F7FA",
            "cloud": 0,
            "cloud_color": "#FFF9C4"
        },
        {
            "name": "Islamabad",
            "country": "Pakistan",
            "lat": 33.7,
            "lon": 73.167,
            "temp_c": 20.2,
            "temp_color": "#FFCC80",
            "wind_kph": 3.6,
            "wind_color": "#E0F7FA",
            "cloud": 10,
            "cloud_color": "#FFF9C4"
        },
        {
            "name": "Samarqand",
            "country": "Uzbekistan",
            "lat": 39.6542,
            "lon": 66.9597,
            "temp_c": 2.1,
            "temp_color": "#D1F2D3",
            "wind_kph": 4,
            "wind_color": "#E0F7FA",
            "cloud": 75,
            "cloud_color": "#9E9E9E"
        }
    ],
    "statusCode": 200,
    "time": "2025-01-30T11:48:27.550Z"
}
  ```

- **Name:** baxa degan mamlakat topilmaganligini bildirdi
- **Status Code:** 200 (OK)
- **Body:**
  ```json
{
    "message": "Success",
    "data": [
        {
            "name": "Tashkent",
            "country": "Uzbekistan",
            "lat": 41.317,
            "lon": 69.25,
            "temp_c": 2.1,
            "temp_color": "#D1F2D3",
            "wind_kph": 7.9,
            "wind_color": "#E0F7FA",
            "cloud": 0,
            "cloud_color": "#FFF9C4"
        },
        {
            "name": "Islamabad",
            "country": "Pakistan",
            "lat": 33.7,
            "lon": 73.167,
            "temp_c": 20.2,
            "temp_color": "#FFCC80",
            "wind_kph": 3.6,
            "wind_color": "#E0F7FA",
            "cloud": 10,
            "cloud_color": "#FFF9C4"
        },
        {
            "name": "Samarqand",
            "country": "Uzbekistan",
            "lat": 39.6542,
            "lon": 66.9597,
            "temp_c": 2.1,
            "temp_color": "#D1F2D3",
            "wind_kph": 4,
            "wind_color": "#E0F7FA",
            "cloud": 75,
            "cloud_color": "#9E9E9E"
        },
        {
            "country": "baxa",
            "error": "Country not found"
        }
    ],
    "statusCode": 200,
    "time": "2025-01-30T11:54:27.823Z"
}
  ```

- **Name:** token mavjud bo'lmagandagi holat
- **Status Code:** 401 (Unauthorized)
- **Body:**
  ```json
{
    "message": "Unauthorized",
    "data": "Access denied. No token provided.",
    "statusCode": 401,
    "time": "2025-01-31T18:04:15.738Z"
}
  ```

---

## login

**Endpoint:** `POST https://tgqh7p-1478.csb.app/auth/login`

#### Request:
- **Method:** POST
- **Body:**
  ```json
{
    "username":"Samandarrr",
    "password":"Baxa123@"
}
  ```
#### Responses:
- **Name:** succes
- **Status Code:** 200 (OK)
- **Body:**
  ```json
{
    "message": "OK",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3OWNkYjZiZGVkZTVjY2Y4ZjJjMzlkMSIsInVzZXJuYW1lIjoiU2FtYW5kYXJyIiwiaWF0IjoxNzM4MzQ1NzUxfQ.yyGfH49ml4CAwLaMJVKUUWjPzdfghdpD_ukwOJ24YWk"
}
  ```

- **Name:** User topilmagandagi holat
- **Status Code:** 404 (Not Found)
- **Body:**
  ```json
{
    "message": "NotFound",
    "data": "User not found",
    "statusCode": 404,
    "time": "2025-01-31T17:49:45.542Z"
}
  ```

---

## sign up

**Endpoint:** `POST https://tgqh7p-1478.csb.app/auth/signup`

#### Request:
- **Method:** POST
- **Body:**
  ```json
{
    "name":"Ali",
    "surname":"Vali",
    "username":"Yo'ldoshshsss",
    "password":"Yo'ldosh"
}
  ```
#### Responses:
- **Name:** User mavjud bo'lgandagi holati
- **Status Code:** 400 (Bad Request)
- **Body:**
  ```json
{
    "message": "UnknownError",
    "data": "User already exists",
    "statusCode": 500,
    "time": "2025-01-31T17:28:44.888Z"
}
  ```

- **Name:** succes
- **Status Code:** 201 (Created)
- **Body:**
  ```json
{
    "message": "Success",
    "data": "679d0ae8051da4285f2b038a",
    "statusCode": 200,
    "time": "2025-01-31T17:39:52.539Z"
}
  ```

- **Name:** Paroldagi kamchilik
- **Status Code:** 400 (Bad Request)
- **Body:**
  ```json
{
    "error": "Parol kamida 6 ta belgidan iborat bo‘lishi kerak.,Parolda kamida bitta harf va bitta raqam bo‘lishi kerak."
}
  ```

- **Name:** Paroldagi kamchilik
- **Status Code:** 400 (Bad Request)
- **Body:**
  ```json
{
    "error": "Parolda kamida bitta harf va bitta raqam bo‘lishi kerak."
}
  ```

---
