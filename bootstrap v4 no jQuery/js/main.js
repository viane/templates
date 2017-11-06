window.onload = () => {
  // fetch get
  const fetchUrl = 'https://api.github.com/users/xiaotian/repos';
  fetch(fetchUrl, {method: 'get'}).then(function(response) {
    return response.json();
  }).then(function(data) {
    console.log(data);
  });

  // fetch post
  // const params = '';
  // fetch(fetchUrl, {
  //   method: 'post',
  //   body: JSON.stringify(params)
  // }).then(function(response) {
  //   return response.json();
  // }).then(function(data) {
  //   console.log(data);
  // });

  // check box
  const checkBoxTestBtn = document.getElementById('CheckBoxTest');
  function checkBoxTestFn() {
    var checkBoxGroup = document.getElementsByClassName('checkBoxGroup1');
    for (var i = 0; checkBoxGroup[i]; ++i) {
      if (checkBoxGroup[i].checked) {
        console.log(checkBoxGroup[i].value);
      }
    }
  }
  checkBoxTestBtn.addEventListener("click", checkBoxTestFn, false);

  // ratio box
  const ratioBoxTestBtn = document.getElementById('RatioBoxTest');
  function ratioBoxTestFn() {
    var ratioBoxGroup = document.getElementsByName('ratioBoxGroup1');
    for (var i = 0, length = ratioBoxGroup.length; i < length; ++i) {
      if (ratioBoxGroup[i].checked) {
        console.log(ratioBoxGroup[i].value);
      }
    }
  }
  ratioBoxTestBtn.addEventListener("click", ratioBoxTestFn, false);

}
