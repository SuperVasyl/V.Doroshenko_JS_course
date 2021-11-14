const position = prompt('Скажіть, будь ласка, як Вас звати')

if (position === 'Ігор') {
    alert('Доброго дня, адміне Ігор')
} else if (position === 'Сергій') {
    alert('Доброго дня, адміне Сергій')
} else if (position === 'Паша') {
    alert('Привіт, пацієнте Павло')
} else if (position === 'Оля') {
    alert('Вітаємо на роботі, пані Олю')
} else if (position === 'Оксана') {
    alert('Вітаємо на роботі, пані Оксано')
} else {
    alert('Ми Вас не знаємо. Покиньте лікарню')
}