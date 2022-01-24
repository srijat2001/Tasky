const taskContainer = document.querySelector(".task-container");

let globalStore = []

const generateNewCard = (textData) => `
    <div class="col-md-6 col-lg-4">
        <div class="card">
            <div class="card-header d-flex justify-content-end gap-3">
                <button type="button" class="btn btn-outline-success"><i class="fas fa-pencil-alt"></i></button>
                <button type="button" class="btn btn-outline-danger" onclick=${deleteCard(textData.id)}><i class="fas fa-trash-alt"></i></button>
            </div>
            <div class="card-body">
                <img src=${textData.imageUrl} class="card-img-top" alt="Image">
                <h5 class="card-title mt-2">${textData.taskTitle}</h5>
                <p class="card-text">${textData.taskDesc}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>    
    </div>
    `
;

const deleteCard = (id) => {
    const key = localStorage.key(id);
    localStorage.removeItem(key);
}
const loadData = () => {
    const getCardData = localStorage.getItem("tasks");

    const {cards} = JSON.parse(getCardData);

    cards.map((cardObj) => {
        taskContainer.insertAdjacentHTML("beforeend", generateNewCard(cardObj));
        globalStore.push(cardObj);
    })
};

const saveChanges = () => {
    const textData = {
        id : `${Date.now()}`,
        imageUrl : document.getElementById("img-url").value,
        taskTitle : document.getElementById("task-title").value,
        tastType : document.getElementById("task-type").value,
        taskDesc : document.getElementById("task-desc").value
    };
    taskContainer.insertAdjacentHTML("beforeend",generateNewCard(textData));
    globalStore.push(textData)
    localStorage.setItem("tasks",JSON.stringify({cards:globalStore}));
};
