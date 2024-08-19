class NotionDAO {
    constructor(secret) {
        this.secret = secret;
    }

    queryDatabase(databaseId, filter = {}, sorts = []) {
        console.log("Querying database with id: " + databaseId);

        fetch("https://api.notion.com/v1/databases/" + databaseId, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + this.secret,
                "Notion-Version": "2022-06-28",
                "Content-Type": "application/json"
            },
            data: {
                "filter": filter,
                "sorts": sorts
            }
        }).then(response => {
            return response.json();
        }).then(data => {
            console.log(data);
            return data;
        }).catch(error => {
            console.error(error);
        });
    }

    queryPageContent(pageId) {
        console.log("Querying databases in page with id: " + pageId);

        fetch("https://api.notion.com/v1/pages/" + pageId, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + this.secret,
                "Notion-Version": "2022-06-28",
                "Content-Type": "application/json"
            }
        }).then(response => {
            return response.json();
        }).then(data => {
            console.log(data);
            return data;
        }).catch(error => {
            console.error(error);
        });
    }
}