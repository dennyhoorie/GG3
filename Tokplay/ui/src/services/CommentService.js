export async function getAllComments() {

    const response = await fetch('/api/comments');
    return await response.json();
}

export async function createComment(data) {
    const response = await fetch(`/api/comment`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({comment: data})
    })
    return await response.json();
}

export async function deleteComment(commentId) {
    const response = await fetch(`/api/comment/${commentId}`, {method: 'DELETE'})
    return await response.json();
}

export async function editComment(data) {
    const response = await fetch(`/api/comment`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({comment: data})
    })
    return await response.json();
}

export async function fetchSettings() {

    const response = await fetch('/api/settings');
    return await response.json();
}
