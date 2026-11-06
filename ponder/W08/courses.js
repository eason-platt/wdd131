class Course {
    constructor(code, name, logo) {
        this.code = code;
        this.name = name;
        this.logo = logo;
    }
    enrollStudent(sectionNum) {
        // find the right section...Array.findIndex will work here
        const sectionIndex = this.sections.findIndex(
            (section) => section.sectionNum == sectionNum
        );
        if (sectionIndex >= 0) {
            this.sections[sectionIndex].enrolled++;
            renderSections(this.sections);
        }
    }
}

function sectionTemplate(section) {
    return `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
}

function renderSections(sections) {
    const html = sections.map(sectionTemplate);
    document.querySelector("#sections").innerHTML = html.join("");
}

const aCourse = new Course(
    "CSE121b",
    "Javascript Language",
    "images/js-logo.png"
);

aCourse.sections = [
    { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
    { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}
]

console.log(aCourse.code);
console.log(aCourse.sections);
console.log(aCourse.sections[1].roomNum);

courseCode = document.getElementById("courseCode");
courseCode.textContent = aCourse.code;
courseName = document.getElementById("courseName");
courseName.textContent = aCourse.name;
document.querySelector("img").setAttribute("src", aCourse.logo);
document.querySelector("img").setAttribute("alt", aCourse.logo);
document.querySelector("img").style.width = "100px";

renderSections(aCourse.sections);

document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
});