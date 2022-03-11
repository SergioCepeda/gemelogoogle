import styled from "styled-components";



export const GoogleInput =styled.div`

display:flex;
align-items: center;
border:1px solid lightgray;
height:20px;
padding:10px 20px;
border-radius:999px;
width:65vw;
max-width:560px;
margin:0 auto;
margin-top:20px;

&:hover{
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
}

& > .search__inputIcon {
 color: gray;
}

& > input{
    flex:1;
    padding:10px 20px;
    font-size:medium;
    border:none;

}

& > input:focus{
    outline-width:0;
}



`