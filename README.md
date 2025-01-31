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




