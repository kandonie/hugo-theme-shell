function switch_review(element){
    review_num= element.id.split('_')[2]
    titles = document.getElementById('review_titles')
    content = document.getElementById('content')
    for (let e of titles.children) {
        if(e.id === element.id) {
            e.className = 'active-review-title'
        }
        else {
            e.className = ''
        }
    }

    for (let e of content.children) {
        if(e.id.includes(review_num)) {
            e.className = ''
        }
        else {
            e.className = 'hidden'
        }
    }
}