paragraph = document.getElementById("introduction");
mybutton = document.getElementById("mybutton");

mybutton.addEventListener("click", onClick);

function onClick() {
  paragraph.innerHTML = "Guilford College is a small liberal arts college in Greensboro, North Carolina. Guilford has both traditional students and students who attend its Center for Continuing Education (CCE). Founded in 1837 by members of the Religious Society of Friends (Quakers), Guilford's program offerings include such majors as Peace and Conflict Studies and Community and Justice Studies, both rooted in the college's history as a Quaker institution. Guilford College is the only Quaker-founded college in the southeastern United States. Opening in 1837 as New Garden Boarding School, the institution became a four-year liberal arts college in 1888. Levi Coffin, a well-known abolitionist, Quaker, and political dissenter grew up on the land, which is now considered a historical site. The woods of New Garden, which still exist on campus today, were used as a meeting point for the Underground Railroad in the 19th century, run by Coffin.";
}
