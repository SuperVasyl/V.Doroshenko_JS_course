let quantity = prompt('Назвіть, будь ласка, необхідну кількість столів', 100)

if (quantity == 1 || quantity == 21 || quantity == 31 || quantity == 41 || quantity == 51 || quantity == 61 || quantity == 71 || quantity == 81 || quantity == 91) {
    alert(`${quantity} стіл`)
} else if (quantity >= 2 && quantity <= 4 || quantity >= 22 && quantity <= 24 || quantity >= 32 && quantity <= 34 || quantity >= 42 && quantity <= 44 || quantity >= 52 && quantity <= 54 || quantity >= 62 && quantity <= 64 || quantity >= 72 && quantity <= 74 || quantity >= 82 && quantity <= 84 || quantity >= 92 && quantity <= 94) {
    alert(`${quantity} столи`)
} else if (quantity >= 5 && quantity <= 20 || quantity >= 25 && quantity <= 30 || quantity >= 35 && quantity <= 40 || quantity >= 45 && quantity <= 50 || quantity >= 55 && quantity <= 60 || quantity >= 65 && quantity <= 70 || quantity >= 75 && quantity <= 80 || quantity >= 85 && quantity <= 90 || quantity >= 95 && quantity <= 100) {
    alert(`${quantity} столів`)
} else {
    alert(`Вибачте, це неправильна кількість столів. Вкажіть числовий діапазон від 1 до 100`)
}