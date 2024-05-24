class Graph{
    constructor(sz){
        this.size=sz;
        this.adj=new Array(this.size);
        this.obj={'A':0,'B':1,'C':2,'D':3};
        for(let k=0;k<this.size;k++){
            this.adj[k]=[];
        }
    }

    connect(u,v){
        this.adj[this.obj[u]].push(v);
        this.adj[this.obj[v]].push(u);
    }

    print(){
        let i=0;
        for(let k of Object.keys(this.obj)){
            let s="";
            s+=k;
            s+='->';
            for(let j=0;j<this.adj[i].length;j++){
                s+=this.adj[i][j];
            }
            console.log(s);
            i++;
        }
    }


    BFS(start){
        let queue=[];
        let str="";
        queue.push(start);
        let visited=new Array(this.size).fill(false);
        while(queue.length>0){
        let s = queue[0];
        console.log(visited);
        visited[this.obj[s]]=true;
        queue.shift();
            str+=s;
            str+='->';
        this.adj[this.obj[s]].forEach(ele=>{
            if(!visited[this.obj[ele]]){
                 visited[this.obj[ele]]=true;
                 queue.push(ele);
            }
        })
        }
        str=str.slice(0,str.length-1);
        console.log(str);
    }
}

let graph = new Graph(4);
console.log(graph.adj);
graph.connect('A','B');
graph.connect('A','C');
graph.connect('B','C');
graph.connect('B','D');
graph.connect('D','C');

graph.print();
graph.BFS('D');
graph.BFS('C');