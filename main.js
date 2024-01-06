const addTask = document.querySelector('.add-task');
const form = document.querySelector('.form-holder');
const closeForm = document.querySelector('.close');
const formSubmitBtn = document.querySelector('.submitt');
const Table = document.querySelector('.table-body');
const tableIconUpdate = `<i class="fa-solid fa-pen-to-square"></i>`;
const tableIconDelete = `<i class="fa-solid fa-trash"></i>`;
addTask.addEventListener('click', () => {
    form.style.left = '0%';
})
closeForm.addEventListener('click', (e) => {
    e.preventDefault();
    form.style.left = '-100%';
})

formSubmitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const formObject = {
        taskId: document.querySelector('.id-input').value,
        Title: document.querySelector('.title-input').value,
        Description: document.querySelector('.desc-input').value,
        StartDate: document.querySelector('.sdate-input').value,
        EndDate: document.querySelector('.edate-input').value,
        Status: document.querySelector('.status-list').value,
        Priority: document.querySelector('.priority-list').value
    }
    const tableRow = `
    <tr class="table-row">
    <td class="userid" data-label="Id">${formObject.taskId}</td>
    <td class="title" data-label="Title">${formObject.Title}</td>
    <td class="desc" data-label="Description">${formObject.Description}</td>
    <td class="sdate" data-label="Start Date">${formObject.StartDate}</td>
    <td class="edate" data-label="End Date">${formObject.EndDate}</td>
    <td class="status" data-label="Status">${formObject.Status}</td>
    <td class="priority" data-label="Priority">${formObject.Priority}</td>
    <td class="update" data-label="Update">${tableIconUpdate}</td>
    <td class="delete" data-label="Delete">${tableIconDelete}</td>
    </tr>`
    Table.insertAdjacentHTML("beforeend", tableRow);
})


Table.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-pen-to-square')) {
        form.style.left = '0%';
    }
    else if(e.target.classList.contains('fa-trash')){
        e.target.parentNode.parentNode.remove();
    }
});