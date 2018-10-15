export interface User {
  id: string,
  firstName: string,
  middleNames: string[],
  lastName: string,
}

export async function loadUser(id: string): Promise<User | null> {
  return {
    a: {
      id: 'a',
      firstName: 'Matt',
      middleNames: ['Alfred'],
      lastName: 'Goosehumps',
    },
    b: {
      id: 'b',
      firstName: 'Peumal',
      middleNames: [],
      lastName: 'Veryveryverylongone',
    }
  }[id] || null;
}
