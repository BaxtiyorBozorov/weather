# API Documentation

Ushbu dokumentatsiya ob-havo ma'lumotlarini olish va foydalanuvchilarni ro'yxatdan o'tkazish/kirish imkoniyatini beruvchi API lar haqida ma'lumot beradi.
Bu appni ishga tushirish uchun terminalga quyidagilarni tering 
```bash
npm install
npm run dev
```
...

## 1. Foydalanuvchi Registratsiyasi

Foydalanuvchilarni ro'yxatdan o'tkazish uchun API.

### Endpoint:

```
POST /api/auth/register
```

### So'rov formati:

```json
{
    "name":"Ali",
    "surname":"Vali",
    "username":"Yo'ldosh",
    "password":"Yo'ldosh1"
}
```

### Succes:

```json
{
    "message": "Success",
    "data": "679d0ae8051da4285f2b038a",
    "statusCode": 201,
    "time": "2025-01-31T17:39:52.539Z"
}
```
---

### User mavjud bo'lgandagi holati

```json
{
    "message": "Conflict",
    "data": "User already exists",
    "statusCode": 400,
    "time": "2025-01-31T17:28:44.888Z"
}
```


---
### Paroldagi kamchiliklar
```json
{
    "error": "Parol kamida 6 ta belgidan iborat bo‘lishi kerak.,Parolda kamida bitta harf va bitta raqam bo‘lishi kerak."
}
```
```json
{
 "error": "Parolda kamida bitta harf va bitta raqam bo‘lishi kerak."
}
```


### Login

Foydalanuvchilarni tizimga kirish uchun API.

### Endpoint:
```
POST /api/auth/login
```
### So'rov formati:
```json
{
    "username":"Samandarrr",
    "password":"Baxa123@"
}
```
### Muvaffaqiyatli javob:
```json
{
    "message": "OK",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3OWNkYjZiZGVkZTVjY2Y4ZjJjMzlkMSIsInVzZXJuYW1lIjoiU2FtYW5kYXJyIiwiaWF0IjoxNzM4MzQ1NzUxfQ.yyGfH49ml4CAwLaMJVKUUWjPzdfghdpD_ukwOJ24YWk"
}
```
### Xatolik javobi:
```json
{
    "message": "NotFound",
    "data": "User not found",
    "statusCode": 404,
    "time": "2025-01-31T17:49:45.542Z"
}
```
---

### 3. Ob-havo Ma'lumotlarini Olish
Bir yoki bir nechta mamlakatlar uchun ob-havo ma'lumotlarini olish uchun API.

### Endpoint:
```
GET /api/weather
```
### So'rov parametrlari:
countries – Vergul bilan ajratilgan mamlakatlar ro'yxati (masalan: Uzbekistan,USA,Russia).

### So'rov misoli:

```
GET http://localhost:1478/weather/?countries=uzbekistan,pakistan,samarqand
```
### Muvaffaqiyatli javob:
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
### Xatolik javobi:
Agar biror mamlakat topilmasa:

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
            "country": "baxa",
            "error": "Country not found"
        }
    ],
    "statusCode": 200,
    "time": "2025-01-30T11:54:27.823Z"
}
```
### Token mavjud bo'lmagandagi xatolik
```json
{
    "message": "Unauthorized",
    "data": "Access denied. No token provided.",
    "statusCode": 401,
    "time": "2025-01-31T18:04:15.738Z"
}
```
---
### 4. Xatoliklar
Umumiy xatoliklar:

400 Bad Request – So'rov formati noto'g'ri yoki kerakli parametrlar yetishmayapti.

401 Unauthorized – Foydalanuvchi tizimga kirmagan yoki token noto'g'ri.

500 Internal Server Error – Serverda ichki xatolik.
---

### 5. Misol So'rovlar
Registratsiya:
```bash
curl -X POST http://localhost:5000/api/auth/register \
-H "Content-Type: application/json" \
-d '{
  "name": "John",
  "surname": "Doe",
  "username": "johndoe",
  "password": "password123"
}'
```
Kirish:
```bash
curl -X POST http://localhost:5000/api/auth/login \
-H "Content-Type: application/json" \
-d '{
  "username": "johndoe",
  "password": "password123"
}'
```
Ob-havo ma'lumotlari:
```bash
curl -X GET "http://localhost:5000/api/weather?countries=Uzbekistan,USA,Russia"
```
---
## 6. Qo'shimcha Ma'lumot

- **Baza vaqti:** UTC+0
- **Ob-havo ma'lumotlari:** Har kuni soat 00:00 da yangilanadi.
- **API kaliti:** WeatherAPI dan olingan API kalitidan foydalaniladi.

## 7. Aloqa

Agar savollar yoki takliflar bo'lsa, quyidagi manzil orqali bog'laning:

- **Email:** [support@example.com](mailto:support@example.com)
- **Telefon:** [+998 90 123 45 67](tel:+998901234567)



