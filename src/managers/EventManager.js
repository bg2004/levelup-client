export const getEvents = () => {
    return fetch("http://localhost:8000/events", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const createEvent = (event) => {
    return fetch("http://localhost:8000/events", {
        method: "POST", 
        headers:{
            "Authorization":`Token ${localStorage.getItem("lu_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(event)
    })
}

export const UpdateEvent = (event, eventId) => {
    return fetch(`http://localhost:8000/events/${eventId}`, {
        method: "PUT", 
        headers:{
            "Authorization":`Token ${localStorage.getItem("lu_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(event)
    })
}

export const getSingleEvent = (eventId) => {
    return fetch(`http://localhost:8000/events/${eventId}`, {
        method: "GET",
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const deleteEvent = (eventId) => {
    return fetch(`http://localhost:8000/events/${eventId}`, {
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
}

export const leaveEvent = (id) => {
    return fetch(`http://localhost:8000/events/${id}/leave`, 
    {
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })  
}

export const joinEvent = (id) => {
    return fetch(`http://localhost:8000/events/${id}/signup`, {
        method: "POST",
        headers: {
        "Authorization": `Token ${localStorage.getItem("lu_token")}`,
        "Content-Type": "application/json",
        "Accept": "application/json"
        },
        body: JSON.stringify(id)
    })
        .then(res => res.json())
}