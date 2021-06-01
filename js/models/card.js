const MAX_DESCRIPTION = 200;
const MAX_MODAL_DESCRIPTION = 400;

export class Card {

    constructor(videoUrl,title,message,linkDoc){        
        this.title =  title;
        this.url = videoUrl;
        this.message = message;
        this.downloadContentLink = linkDoc;
    }

    get card(){
        let card = document.createElement('iframe');
        card.src = this.url;
        card.title = this.title;
        card.allowFullscreen = false;
        return card;
    }

    get textContent(){
        let div = document.createElement('div');
        div.className = 'col-md-12 col-lg-8';
        div.innerHTML = `
                <p class="h1">${this.title}</p>
                <p class="lead">${this.reduceMessage(this.message,MAX_DESCRIPTION)}</p>
            
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Saiba mais
                </button>
            
                <!-- Modal -->
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">${this.title}</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p class="lead">${this.reduceMessage(this.message,MAX_MODAL_DESCRIPTION)}</p>
                                <p class="lead">Saiba mais baixando o relatório desta seção.👇 😉</p>
                            </div>
                            <div class="modal-footer">
                            <a href="${this.downloadContentLink}" class="btn btn-primary">Download</a>
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
        `;

        return div;
    }

    reduceMessage(string,max){
        return string?.substr(0,max)+'...';
    }
}

