import ResearchEntity from '../../src/entities/ResearchEntity'
import ExperimentEntity from '../../src/entities/ExperimentEntity'
import PropEntity from '../../src/entities/PropEntity'

/**
 *
 * @type {ResearchEntityInterface[]}
 */
var entities = [
  new ResearchEntity(
    [
      new ExperimentEntity('Ура! Это работает.', new Date(1486684800000), [
        new PropEntity('Эксперимент прошёл удачно', 1, 0)
      ]),
      new ExperimentEntity('Что то пошло не так...', new Date(14866848000001), [
        new PropEntity('Эксперимент прошёл удачно', 0, 0)
      ])
    ],
    'testResearchName',
    [],
    [
      1486684800000,
      1486794800000
    ],
    1
  ),
  new ResearchEntity(
    [
      new ExperimentEntity('', new Date(1486684800000), [
        new PropEntity('Отпочкованно', 1, 1),
        new PropEntity('Погибло', 0, 1),
        new PropEntity('Мутация', 0, 0)
      ]),
      new ExperimentEntity('', new Date(1486684800000), [
        new PropEntity('Отпочкованно', 3, 1),
        new PropEntity('Погибло', 0, 1),
        new PropEntity('Мутация', 0, 0)
      ]),
      new ExperimentEntity('', new Date(1486684800000), [
        new PropEntity('Отпочкованно', 8, 1),
        new PropEntity('Погибло', 1, 1),
        new PropEntity('Мутация', 0, 0)
      ]),
      new ExperimentEntity('', new Date(1486684800000), [
        new PropEntity('Отпочкованно', 23, 1),
        new PropEntity('Погибло', 4, 1),
        new PropEntity('Мутация', 0, 0)
      ]),
      new ExperimentEntity('', new Date(1486684800000), [
        new PropEntity('Отпочкованно', 71, 1),
        new PropEntity('Погибло', 46, 1),
        new PropEntity('Мутация', 1, 0)
      ])
    ],
    'Исследование грибковой колонии Мазили Канисса',
    [],
    [
      1486684800000,
      1486694800000
    ],
    2
  ),
  new ResearchEntity(
    [
      new ExperimentEntity('', new Date(1486684800000), [
        new PropEntity('Диаметр гороха', 7112, 1)
      ]),
      new ExperimentEntity('', new Date(1486684800000), [
        new PropEntity('Диаметр гороха', 7159, 1)
      ]),
      new ExperimentEntity('', new Date(1486684800000), [
        new PropEntity('Диаметр гороха', 7002, 1)
      ]),
      new ExperimentEntity('', new Date(1486684800000), [
        new PropEntity('Диаметр гороха', 7217, 1)
      ])
    ],
    'Размер гороха по микрометру',
    [],
    [
      1486694800000,
      1486694800000
    ],
    3
  )
]
export default entities
