import { User } from './api';

export function fullName(user: User) {
  return user.firstName
    + (user.middleNames.length ? ' ' + user.middleNames.join(' ') : '')
    + ' ' + user.lastName;
}
