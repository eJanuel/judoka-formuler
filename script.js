function userInfo() {

                    //get user_name

  var name = document.getElementById('user_name').value;
  console.log(name);
  //document.getElementById('pushNameHere').innerHTML = 'Bonjour' + ' ' + name;

                    //get user_gender

  if (document.getElementById('genderChoice0').checked) {
    gender = document.getElementById('genderChoice0').value;

  } else if (document.getElementById('genderChoice1').checked) {
    gender = document.getElementById('genderChoice1').value;
  }
  console.log(gender);

                    //get user_lang

  if (document.getElementById('langChoice0').checked) {
    lang = document.getElementById('langChoice0').value;

  } else if (document.getElementById('langChoice1').checked) {
    lang = document.getElementById('langChoice1').value;
  }
  console.log(lang);

                    //get user_age

  var age = document.getElementById('user_age').value;
  console.log(age);

                    //get user_weight

  var weight = document.getElementById('user_weight').value;
  console.log(weight);
}
