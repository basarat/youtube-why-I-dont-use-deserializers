import { loadUser } from './api';

main();
async function main() {
  const userA = await loadUser('a');
  if (userA != null) {
    console.log(
      userA.firstName
      + (userA.middleNames.length ? ' ' + userA.middleNames.join(' ') : '')
      + ' ' + userA.lastName
    );
  }
  const userB = await loadUser('b');
  if (userB != null) {
    console.log(
      userB.firstName
      + (userB.middleNames.length ? ' ' + userB.middleNames.join(' ') : '')
      + ' ' + userB.lastName
    );
  }
}
