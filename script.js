function filterFunction() {

  var input, filter, ul, li, a, i;

  input = document.getElementById("myInput");

  filter = input.value.toUpperCase();

  div = document.getElementById("cards");
  card = document.querySelectorAll(".card");


  a = div.getElementsByTagName("h2");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
      card[i].style.display = "";
    } else {
      a[i].style.display = "none";
      card[i].style.display = "none";

    }
  }
}