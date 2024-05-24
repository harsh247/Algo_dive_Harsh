class Graph{
constructor(N){
    this.n = N;
    this.adj = new Array(N);
    for(let l=0;l<N;l++){
        this.adj[l]=[];
    }
}

   addEdge(v,w){
        this.adj[v].push(w);
    }

    DFST(e){
        let visited = new Array(this.n).fill(false);
        let st = [];
        st.push(e);
        visited[e]=true;
        let k=e;
        let trav=[e];
        console.log(visited);
        // for(let j=0;j<this.n;j++){
        //     console.log(this.adj[j].length);
        // }
     for(let p=0;p<this.adj.length;p++){
      if(!visited[p]){
       st.push(p);
       visited[p]=true;
        let k=p;
        trav.push(p);
      }
      console.log(st);
      while(st.length!=0){
            // if(k){
            for(let i=0;i<this.adj[k].length;i++){
                console.log(this.adj[k][i]);
                if(!visited[this.adj[k][i]]){
                    st.push(this.adj[k][i]);
                    trav.push(this.adj[k][i]);
                    visited[this.adj[k][i]]=true;
                }       
            }
            // }
             k = st.pop();
            
            
        }
     }
        console.log(visited);
        return trav;
    }

}

var g = new Graph(6);
// g.addEdge(0, 1);
// g.addEdge(0, 2);
// g.addEdge(1, 2);
// g.addEdge(2, 0);
// g.addEdge(2, 3);
// g.addEdge(3, 3);


 g.addEdge(0, 1);
 g.addEdge(0,4);
 g.addEdge(1,5);
g.addEdge(2,0);
 g.addEdge(3, 1);
// g.addEdge(3,2);
g.addEdge(4,1);
g.addEdge(4, 3);
   
   
console.log(g);
console.log("The DFST is:"+g.DFST(4));