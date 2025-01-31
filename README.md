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
  "name": "John",
  "surname": "Doe",
  "username": "Johndoe",
  "password": "Password123"
}
```

### Muvaffaqiyatli javob:

```
{
    "message": "Success",
    "data": "679d0ae8051da4285f2b038a",
    "statusCode": 200,
    "time": "2025-01-31T17:39:52.539Z"
}
```

---

### Login

Foydalanuvchilarni tizimga kirish uchun API.

### Endpoint:
```
POST /api/auth/login
```
### So'rov formati:
```json
{
  "username": "johndoe",
  "password": "password123"
}
```
### Muvaffaqiyatli javob:
```json
{
  "message": "Login successful",
  "user": {
    "name": "John",
    "surname": "Doe",
    "username": "johndoe"
  }
}
```
### Xatolik javobi:
```json
{
  "message": "Invalid credentials"
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
GET /api/weather?countries=Uzbekistan,USA,Russia
```
### Muvaffaqiyatli javob:
```json
[
  {
    "name": "Tashkent",
    "country": "Uzbekistan",
    "lat": 41.317,
    "lon": 69.25,
    "temp_c": 8.2,
    "wind_kph": 8.6,
    "cloud": 2
  },
  {
    "name": "New York",
    "country": "USA",
    "lat": 40.71,
    "lon": -74.01,
    "temp_c": 15.0,
    "wind_kph": 12.3,
    "cloud": 10
  },
  {
    "name": "Moscow",
    "country": "Russia",
    "lat": 55.75,
    "lon": 37.62,
    "temp_c": 5.0,
    "wind_kph": 10.0,
    "cloud": 5
  }
]
```
### Xatolik javobi:
Agar biror mamlakat topilmasa:

```json
[
  {
    "name": "Tashkent",
    "country": "Uzbekistan",
    "lat": 41.317,
    "lon": 69.25,
    "temp_c": 8.2,
    "wind_kph": 8.6,
    "cloud": 2
  },
  {
    "country": "Wakanda",
    "error": "Country not found"
  }
]
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
### 6. Qo'shimcha Ma'lumot

Baza vaqti: UTC+0

Ob-havo ma'lumotlari: Har kuni soat 00:00 da yangilanadi.

API kaliti: WeatherAPI dan olingan API kalitidan foydalaniladi.

### 7. Aloqa
Agar savollar yoki takliflar bo'lsa, quyidagi manzil orqali bog'laning:

Email: support@example.com

Telefon: +998 90 123 45 67




