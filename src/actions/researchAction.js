
export const CREATE_RESEARCH = 'CREATE_RESEARCH'
export const REMOVE_RESEARCH = 'REMOVE_RESEARCH'
export const UPDATE_RESEARCH = 'UPDATE_RESEARCH'
export const RECEIVE_RESEARCH = 'FETCH_RESEARCH'

export function CreateResearch (entity) {
  return {
    type: CREATE_RESEARCH,
    entity
  }
}

export function RemoveResearch (entity) {
  return {
    type: REMOVE_RESEARCH,
    entity
  }
}

export function UpdateResearch (entity) {
  return {
    type: UPDATE_RESEARCH,
    entity
  }
}

export function ReceiveResearch (json) {
  return {
    type: RECEIVE_RESEARCH,
    entities: json
  }
}

export const FetchResearch = () => despatch => {
  return fetch('/research/research.json')
    .then(response => response.json())
    .then(json => despatch(ReceiveResearch(json)))
}
