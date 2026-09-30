import { Component } from "react";

export default class ErrorBoundary extends Component {
  state = { hasError: false, error: null };
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{minHeight:"70vh",display:"grid",placeItems:"center",padding:24,fontFamily:"Arial,sans-serif",background:"#fffdf9",color:"#29251f"}}>
          <div style={{maxWidth:650,textAlign:"center",padding:32,border:"1px solid #e9e1d6",borderRadius:20,background:"#fff"}}>
            <div style={{fontSize:48}}>🌿</div>
            <h1>Something went wrong</h1>
            <p>The page could not be rendered. Refresh the page after checking the terminal for the exact error.</p>
            <button onClick={() => window.location.reload()} style={{padding:"11px 18px",border:0,borderRadius:10,background:"#a8493d",color:"white",cursor:"pointer"}}>Refresh</button>
            {this.state.error?.message && <details style={{marginTop:20,textAlign:"left"}}><summary>Technical error</summary><pre style={{whiteSpace:"pre-wrap"}}>{this.state.error.message}</pre></details>}
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
