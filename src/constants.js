//Url дефолтной аватарки
export const defaultAvatarUrl = 'aboba'

//Объект шапки комплектующего type: Шапка
export const component_header = {
    motherboard : 'Материнская плата',
    cpu : 'Процессор',
    ram: 'Оперативная память',
    gpu: 'Видеокарта',
    cooler: 'Система охлаждения',
    power_sypply: 'Блок питания',
    hard_disk: 'Жёсткий диск',
    hull : 'Корпус'
}

//Объект со всеми комплектющими, для удобства отрисовки
export const pc_components = {
    motherboard:
        [
            {
                code_name: 'brand',
                note: 'Бренд:'
            },
            {
                code_name: 'model',
                note: 'Модель:'
            },
            {
                code_name: 'socket',
                note: 'Сокет:'
            },
            {
                code_name: 'chipset',
                note: 'Чипсет'
            },
            {
                code_name: 'price',
                note: 'Средняя стоимость в Руб.:'
            },
            {
                code_name: 'status',
                note: 'Достоверность:'
            }
        ],
    cpu:
        [
            {
                code_name: 'brand',
                note: 'Бренд:'
            },
            {
                code_name: 'model',
                note: 'Модель:'
            },
            {
                code_name: 'generation',
                note: 'Поколение:'
            },
            {
                code_name: 'socket',
                note: 'Сокет:'
            },
            {
                code_name: 'price',
                note: 'Средняя стоимость в Руб.:'
            },
            {
                code_name: 'status',
                note: 'Достоверность:'
            }
        ],
    ram:
        [
            {
                code_name: 'brand',
                note: 'Бренд:'
            },
            {
                code_name: 'model',
                note: 'Модель:'
            },
            {
                code_name: 'memory_size',
                note: 'Память в Гб.:'
            },
            {
                code_name: 'price',
                note: 'Средняя стоимость в Руб.:'
            },
            {
                code_name: 'status',
                note: 'Достоверность:'
            }
        ],
    gpu:
        [
            {
                code_name: 'brand',
                note: 'Бренд:'
            },
            {
                code_name: 'model',
                note: 'Модель:'
            },
            {
                code_name: 'memory_size',
                note: 'Объём видопамяти в Гб.:'
            },
            {
                code_name: 'price',
                note: 'Средняя стоимость в Руб.:'
            },
            {
                code_name: 'status',
                note: 'Достоверность:'
            }
        ],
    cooler:
        [
            {
                code_name: 'brand',
                note: 'Бренд:'
            },
            {
                code_name: 'model',
                note: 'Модель:'
            },
            {
                code_name: 'cooling_type',
                note: 'Тип охлаждения:'
            },
            {
                code_name: 'price',
                note: 'Средняя стоимость в Руб.:'
            },
            {
                code_name: 'status',
                note: 'Достоверность:'
            }
        ],
    power_sypply:
        [
            {
                code_name: 'brand',
                note: 'Бренд:'
            },
            {
                code_name: 'model',
                note: 'Модель:'
            },
            {
                code_name: 'power',
                note: 'Мощность в Вт.:'
            },
            {
                code_name: 'price',
                note: 'Средняя стоимость в Руб.:'
            },
            {
                code_name: 'status',
                note: 'Достоверность:'
            }
        ],
    hard_disk:
        [
            {
                code_name: 'brand',
                note: 'Бренд:'
            },
            {
                code_name: 'model',
                note: 'Модель:'
            },
            {
                code_name: 'memory_size',
                note: 'Объём накопителя в Гб.:'
            },
            {
                code_name: 'type_disk',
                note: 'Тип жёсткого диска:'
            },
            {
                code_name: 'price',
                note: 'Средняя стоимость в Руб.:'
            },
            {
                code_name: 'status',
                note: 'Достоверность:'
            }
        ],
    hull:
        [
            {
                code_name: 'brand',
                note: 'Бренд:'
            },
            {
                code_name: 'model',
                note: 'Модель:'
            },
            {
                code_name: 'form_factor',
                note: 'Форм-фактор корпуса:'
            },
            {
                code_name: 'price',
                note: 'Средняя стоимость в Руб.:'
            },
            {
                code_name: 'status',
                note: 'Достоверность:'
            }
        ]

}