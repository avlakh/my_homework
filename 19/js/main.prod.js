"use strict";function myPow(){var t=parseInt(prompt("Введіть число")),r=parseInt(prompt("Введіть натсупне число")),a=Math.pow(t,r);alert(a)}function avgNum(){var t=parseInt(prompt("Введіть число")),r=parseInt(prompt("Введіть наступне число"));alert((t+r)/2)}function squareNum(){var t=parseInt(prompt("Вкажіть сторону квадрата")),r=Math.pow(t,2);alert(r)}function km2ml(){var t=parseInt(prompt("Вкажіть кілометри"));alert("В милях - ".concat(.621371*t," ml"))}function calc(){var t,r=parseInt(prompt("Вкажіть число 1")),a=parseInt(prompt("Вкажіть число 2")),n=prompt("Вкажіть дію");"+"===n?t=r+a:"-"===n?t=r-a:"*"===n?t=r*a:"/"===n?t=r/a:alert("Недопустимий символ"),null!=t&&alert("Результат - ".concat(t))}function findX(){var t=parseInt(prompt("Вкажіть число 1")),r=parseInt(prompt("Вкажіть число 2"));alert("Ікс дорівнює : ".concat(-1*r/t))}function timeToDayEnd(){var t=1440-(60*+prompt("Enter hour")+ +prompt("Enter minutes")),r=parseInt(t/60),a=t-60*r;alert("hours left: ".concat(r,", minutes left: ").concat(a))}function digit2(){var t=+prompt("Введіть трьохзначне число"),r=parseInt(t%100/10);alert("Друга цифра ".concat(r))}function digit5(){var t=+prompt("Введіть п'ятизначне число"),r=parseInt(t%10*1e4+t/10);alert("Посунуте число: ".concat(r))}function salary(){var t=parseInt(prompt("Введіть суму продаж"));alert("Ваша зарплата ".concat(250+t/10))}function yourName(){var t=prompt("Введіть ваше ім'я");alert("Привіт ".concat(t))}function yourAge(){var t=prompt("Введіть рік свого народження");alert("Тобі ".concat(2022-t," років"))}function squareSide(){var t=parseInt(prompt("Введіть сторону квадрату")),r=Math.pow(t,2);alert("Периметр квадрату ".concat(r))}function circleSquare(){var t=parseInt(prompt("Введіть радіус кола")),r=Math.PI*Math.pow(t,2);alert("Радіус кола ".concat(r))}function yourSpeed(){var t=parseInt(prompt("Введіть відстань в кілометрах")),r=parseInt(prompt("Введіть к-ть годин"));alert("Ваша швидкість: ".concat(t/r))}function converter(){var t=parseInt(prompt("Введіть долари"));alert("В євро це: ".concat(.95*t))}