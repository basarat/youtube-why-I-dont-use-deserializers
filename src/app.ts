import { loadUser } from './api';
import * as user from './user';

main();
async function main() {
  const userA = await loadUser('a');
  if (userA != null) {
    console.log(
      user.fullName(userA)
    );
  }
  const userB = await loadUser('b');
  if (userB != null) {
    console.log(
      user.fullName(userB)
    );
  }
}
