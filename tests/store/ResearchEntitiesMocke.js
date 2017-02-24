import ResearchEntity from '../../src/entities/ResearchEntity'
import ExperimentEntity from '../../src/entities/ExperimentEntity'
import StructureEntity from '../../src/entities/StructureEntity'

/**
 * @type {ResearchEntityInterface[]}
 */
var entities = [
  new ResearchEntity(
    [
      new ExperimentEntity('Ура! Это работает.', new Date(1486684800000), [1]),
      new ExperimentEntity('Что то пошло не так...', new Date(14866848000001), [0])
    ],
    'testResearchName',
    [],
    [
      1486684800000,
      1486794800000
    ],
    [
      new StructureEntity('Эксперимент прошёл удачно', StructureEntity.TYPE_BOOLEAN())
    ],
    1
  ),
  new ResearchEntity(
    [
      new ExperimentEntity('', new Date(1486684800000), [0, 0, 0]),
      new ExperimentEntity('', new Date(1486684800000), [3, 0, 0]),
      new ExperimentEntity('', new Date(1486684800000), [8, 1, 0]),
      new ExperimentEntity('', new Date(1486684800000), [23, 4, 0]),
      new ExperimentEntity('', new Date(1486684800000), [71, 46, 1])
    ],
    'Исследование грибковой колонии Мазили Канисса',
    [],
    [
      1486684800000,
      1486694800000
    ],
    [
      new StructureEntity('Отпочкованно', StructureEntity.TYPE_INTEGER()),
      new StructureEntity('Погибло', StructureEntity.TYPE_INTEGER()),
      new StructureEntity('Мутация', StructureEntity.TYPE_BOOLEAN())
    ],
    2
  ),
  new ResearchEntity(
    [
      new ExperimentEntity('', new Date(1486684800000), [7112]),
      new ExperimentEntity('', new Date(1486684800000), [7159]),
      new ExperimentEntity('', new Date(1486684800000), [7002]),
      new ExperimentEntity('', new Date(1486684800000), [7217])
    ],
    'Размер гороха по микрометру',
    [],
    [
      1486694800000,
      1486694800000
    ],
    [
      new StructureEntity('Диаметр гороха', StructureEntity.TYPE_INTEGER())
    ],
    3
  )
]
export default entities
