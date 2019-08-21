export const getCookie = name => {

    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([.$?*|{}()\[\]\\\/+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined
};

export const get = (url) => fetch(url).then(ans => ans.json());

export const post = (url, data) => {
    return fetch(url, {
        headers: {
            'X-CSRFToken': getCookie('csrftoken'),
        },
        method: 'POST',
        body: data
    }).then(ans => ans.json())
};