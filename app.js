const age = prompt('input your age');

/* write a conditional that alerts 'enter' if the user is 21 or older 
and alerts 'leave' otherwise */

if (age >= 21) {
  alert('enter');
}
else {
  alert('leave');
}

const nameList = ['sally', 'sarah', 'betsy', 'sam', 'aretha', 'sun'];

/* use a loop and conditional to alert all the names that begin with 's' */

for (let i = 0; i < nameList.length; i++) {
  if ((nameList[i].charAt(0)) === 's') {
    alert(`Names that begin with 's': ${nameList[i]} `);
  }

}

const userList = [
  {
    name: 'sally',
    age: 20
  },
  {
    name: 'sarah',
    age: 42
  },
  {
    name: 'betsy',
    age: 16
  },
  {
    name: 'sam',
    age: 55
  },
  {
    name: 'aretha',
    age: 32
  },
  {
    name: 'sun',
    age: 3
  }
]


/* use a loop and conditional to alert all the names of users who are over 21 */
for (let i = 0; i < userList.length; i++) {
  if (userList[i].age >= 21) {
    alert(`User who are over 21: ${userList[i].name}`);
  }
}