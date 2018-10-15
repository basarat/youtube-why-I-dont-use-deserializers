import { loadUser } from './api';

async function main() {
  const user = await loadUser('a');
  if (user != null) {
    console.log(
      user.firstName
        + user.middleNames.length ? ' ' + user.middleNames.join(' ') : ''
        + user.lastName
    )
  }
}
