/* javascript crud app*/

/* dataform add, remove, delete */

document.addEventListener('DOMContentLoaded', () => {
    const addForm = document.getElementById('AddForm')
    const editForm = document.getElementById('EditForm')
    const studentTable = document.querySelector('.student-table')
    let students = [];

    let editIndex = -1;

    addForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newStudent = {
            name: addForm.studentAddName.value,
            age: addForm.studentAddAge.value,
            email: addForm.studentAddEmail.value,
            phone: addForm.studentAddPhoneNo.value,
            address: addForm.studentAddAddress.value,
        };
        students.push(newStudent)
        addForm.reset()
        renderTable();
    })

    editForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const updateStudent = {
            name: editForm.studentEditName.value,
            age: editForm.studentEditAge.value,
            email: editForm.studentEditEmail.value,
            phone: editForm.studentEditPhoneNo.value,
            address: editForm.studentEditAddress.value,
        };
        students[editIndex] = updateStudent;
        editIndex = -1
        editForm.reset()
        renderTable();
    })

    const renderTable = () => {
        const tableHTML = `
                <table>
                 <thead>
                   <tr>
                      <th>Name</th>
                      <th>Age</th>
                      <th>Email</th>
                      <th>Mobile</th>
                      <th>Address</th>
                      <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                      ${students.map((student, index) => `
                        <tr>
                                <td>${student.name}</td>
                                <td>${student.age}</td>
                                <td>${student.email}</td>
                                <td>${student.mobile}</td>
                                <td>${student.address}</td>
                             <td>
                                <button onclick='editStudent(${index})'>Edit</button>
                                <button onclick='deleteStudent(${index})'>Delete</button>
                            </td>
                        </tr>
                        `).join('')}
                    </tbody>
                </table>
    `;
        studentTable.innerHTML = tableHTML;
    }

    window.editStudent = (index) => {
        editIndex = index;
        const student = students[index];
        editForm.studentEditName.value = student.name
        editForm.studentEditAge.value = student.age
        editForm.studentEditEmail.value = student.email
        editForm.studentEditPhoneNo.value = student.phone
        editForm.studentEditAddress.value = student.address
    }

    window.deleteStudent = (index) => {
        students.splice(index, 1);
        renderTable();
    }
})