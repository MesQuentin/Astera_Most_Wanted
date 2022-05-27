const fetchAllMonsters =
    async function() {
  const answer = await fetch('https://mhw-db.com/monsters');

  if (answer.status == 200)
    return await answer.json();

  else {
    return Error(answer.statusText)
  }
}

const getMonsterData =
    async function() {
  const monsters = await fetchAllMonsters()
  return monsters;
}

export default getMonsterData