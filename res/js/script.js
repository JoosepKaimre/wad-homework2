
$(document).ready(function(){

    var courses = [new Course("Agile software development", 1, 82),
        new Course("System modeling", 1, 85),
        new Course("Object-oriented programming", 2, 99),
        new Course("Estonian language level A1", 2, 65)];

    var user = new User("John", "Doe", "11/10/1990", "Software Engineering", findGPA(courses))

    populateProfileInfo(user);
    populateCourseList(courses)

    $('#profile-button').click(function () {
        $('#profile-container').addClass('active');
        $('#courses-container').removeClass('active');
        $('#profile-button').addClass('active');
        $('#courses-button').removeClass('active');
    })

    $('#courses-button').click(function () {
        $('#profile-container').removeClass('active');
        $('#courses-container').addClass('active');
        $('#profile-button').removeClass('active');
        $('#courses-button').addClass('active');
    })

	$("#add-course-button").click(function(){
        toggleForm();
	});

    $('#save-course').click(function () {
        var course = new Course($('#title').val(), $('#semester').val(), $('#grade').val());
        addCourse(course);
        toggleForm();
        $('#title').val("");
        $('#semester').val("");
        $('#grade').val("");
    });

    $('#cancel-course').click(function () {
        toggleForm();
        $('#title').val("");
        $('#semester').val("");
        $('#grade').val("");
    });

    function populateProfileInfo(user) {
        $('#name').html(user.firstname + " " + user.lastname);
        $('#birthdate').html(user.birthdate);
        $('#faculty').html(user.faculty);
        $('#gpa').html("<strong>" + user.gpa + "</strong>");
    }

    function populateCourseList(courses) {
        $('#courses-list').empty();
        for (let i = 1; i <= courses.length; i++) {
            var row = $('<tr></tr>');
            row.append('<td>' + i + '</td>');
            row.append('<td>' + courses[i - 1].title + '</td>');
            row.append('<td>' + courses[i - 1].semester + '</td>');
            row.append('<td>' + courses[i - 1].grade + '</td>');
            $('#courses-list').append(row);
        }
    }

    function toggleForm() {
        if ($('#add-course').hasClass('active')) {
            $('#add-course').removeClass('active');
        }
        else {
            $('#add-course').addClass('active');
        }
    }

    function addCourse(course) {
        courses.push(course);
        populateCourseList(courses);
        user.gpa = findGPA(courses)
        populateProfileInfo(user);
    }

    function findGPA(courses) {
        var sum = 0;
        for (const course of courses) {
            var grade = course.grade;
            if (grade > 90) {
                sum += 4
            } else if (grade > 80) {
                sum += 3
            } else if (grade > 70) {
                sum += 2
            } else if (grade > 60) {
                sum += 1
            } else if (grade > 50) {
                sum += 0.5
            }
        }
        return Math.round((sum / courses.length) * 100)  / 100;
    }
});

class User {

    constructor(firstname, lastname, birthdate, faculty, gpa){
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthdate = birthdate;
        this.faculty = faculty;
        this.gpa = gpa;
    }
}

class Course {

    constructor(title, semester, grade){
        this.title = title;
        this.semester = semester;
        this.grade = grade;
    }
}