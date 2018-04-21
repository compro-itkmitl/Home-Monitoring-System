![](/Resources/banner.png)
# Home Monitoring System

# ![](/Resources/Home.png) Introduction
สวัสดีครับ วันนี้กลุ่ม Home Monitoring System ได้จัดทำระบบเก็บข้อมูลต่าง ๆ ในบ้านขึ้นมา รวมถึงระบบเฝ้าระวังอย่าง Motion Detector ที่จะสามารถจับตาดูความเรียบร้อยภายในบ้านได้ หากมีความเคลื่อนไหวก็จะสามารถถ่ายภาพและแจ้งเตือนผ่าน Telegram ได้อีกด้วย ~


# ![](/Resources/Help.png) How to use
สำหรับวิธีการใช้งาน ให้ไปที่โฟล์เดอร์หลัก แล้วพิมพ์ `make` ผ่าน Command Line เพื่อเป็นการ สร้างไฟล์ Executable หลังจากนั้น โปรแกรมทำงานโดยอัตโนมัติ (สามารถทำงานได้บน Raspberry Pi ที่ติดตั้ง WiringPi แล้วเท่านั้น)

![](/Resources/First_time_loadup.png)

# ![](/Resources/Setting.png) Configurations
โปรแกรมของเรา จะสามารถรันได้บน Raspbian ที่ลง WiringPi แล้วเท่านั้น เนื่องจากเป็นโปรแกรมที่ออกแบบมาเพื่อทำงานบน Raspberry Pi เท่านั้น  
โดย วิธีการใช้งานนั้นมีดังนี้  
### 1. ทำการ Clone Repository ลงมา~
```
git clone https://github.com/compro-itkmitl/Home-Monitoring-System.git
```  
### 2. เข้าไปใน Directory ของโปรแกรม
```
cd Home-Monitoring-System 
```  
### 3. จากนั้นเข้าไปใน Directory RaspberryPi
```
cd RaspberryPi
```
### 4. ทำการ Setup Environment สำหรับรันโปรแกรม
```
export DEVICE_ID="example" TELEGRAM_USER="1234" ACCESSKEY="key"
```  
* DEVICE_ID คือ ID ที่ใช้บอกว่าเป็น device ตัวไหน  
* TELEGRAM_USER คือ Chat ID ของ Telegram ที่ต้องการให้แจ้งเตือน
* ACCESSKEY คือ Key ที่ใช้ในการ Authentication เพื่อนำข้อมูลเข้าสู่ระบบ

### 5. สั่ง Build & Run โปรแกรม
```
make
```

# ![](/Resources/Dashboard.png) Interfaces
โปรแกรมของเรา จะสามารถรันได้บน Raspbian ที่ลง WiringPi แล้วเท่านั้น เนื่องจากเป็นโปรแกรมที่ออกแบบมาเพื่อทำงานบน Raspberry Pi เท่านั้น


# ![](/Resources/Team.png) Team Members
|  |ชื่อ|นามสกุล|GitHub Username|รหัสนักศึกษา|
|:-:|--|------|---------------|---------|
|![https://www.facebook.com/wiput.pootong](/Resources/wiput1999.jpg)|Wiput|Pootong|[@wiput1999](https://github.com/wiput1999)|60070090|
|![](/Resources/CAT6e.jpg)|Sakorn|Saokaew|[@CAT6e](https://github.com/CAT6e)|60070102|
|![https://www.facebook.com/810Teams](/Resources/810Teams.jpg)|Teerapat|Kraisrisirikul|[@810Teams](https://github.com/810Teams)|60070183|

# ![](/Resources/Team.png) Assistant Teachers
|ผศ. ดร. กิติ์สุชาติ พสุภา|ผศ. ดร. ปานวิทย์ ธุวะนุติ|
|:-:|:-:|
|![](/Resources/AjOng.jpg)|![](/Resources/AjPanwit.jpg)|

รายงานนี้เป็นส่วนหนึ่งของวิชา Computer Programming (รหัสวิชา 06016206)

คณะเทคโนโลยีสารสนเทศ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง