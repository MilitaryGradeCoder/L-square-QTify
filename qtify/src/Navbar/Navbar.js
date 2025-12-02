import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";
import Modal from 'react-modal';
import { useState } from "react";
import { useSnackbar } from "notistack";





Modal.setAppElement('#root');



function Navbar ({ searchData }) {
const [isOpen, setIsOpen] = useState(false);
const [name, setName] = useState("");
const [mail, setMail] = useState("");
const [subject, setSubject] = useState("");
const [disc, setDisc] = useState("");
const {enqueueSnackbar} = useSnackbar();




const openModal = ()=>{
setIsOpen(true);
}
const closeModal = ()=>{
  setIsOpen(false);
}

const handleSubmit = () =>{
  let valid = true;
  if(!name){
    document.getElementById("name").style.backgroundColor = "red";
    valid = false;
    }else if(!mail){
    document.getElementById("mail").style.backgroundColor = "red";
    valid = false;
    }else if(!subject){
    document.getElementById("sub").style.backgroundColor = "red";
    valid = false;
    }else if(!disc){
    document.getElementById("disc").style.backgroundColor = "red";
    valid = false;
    }
    
    if (valid){
      setName("");
      setMail("");
      setSubject("");
      setDisc("");
      setIsOpen(false);
      enqueueSnackbar('Thank You! Your feedback submitted successfully.', {variant: 'success', anchorOrigin:{vertical: 'bottom', horizontal: 'center'}})
    }
}

  return (<>
    <nav className={styles.navbar}>
      <Link to="/">
        <Logo />
      </Link>
      <div className={styles.isDesktop}>
      <Search 
        placeholder="Search a song of your choice"
        searchData={searchData=[]}
      />
      </div>
      <div>
          <Button Text = "Give Feedback" handleClick = {openModal}/>
     
          <Modal
            isOpen={isOpen}
            onRequestClose={closeModal} // Closes the modal when clicking outside or pressing Esc
            contentLabel="Feedback Form"
            className={styles.modalContent}
            overlayClassName={styles.modalOverlay}
          >
            <div className={styles.feedBackHeader}>
            <p className={styles.feedbackText}>Feedback</p>
            <button className={styles.closeButton} onClick={closeModal}>X</button>
            </div>
            <div className={styles.inputDiv}>
              <input id="name" className={styles.inputArea} type="text" placeholder="Full name" value={name} 
              onChange = {(e)=>{setName(e.target.value); e.target.style.backgroundColor = "white"}}/>
               <input id="mail" className={styles.inputArea} type="email" placeholder="Email id" value={mail} 
               onChange = {(e)=>{setMail(e.target.value); e.target.style.backgroundColor = "white"}}/>
                <input id="sub" className={styles.inputArea} type="text" placeholder="Subject" value={subject} 
                onChange = {(e)=>{setSubject(e.target.value); e.target.style.backgroundColor = "white"}}/>
                <textarea id="disc" className={styles.discriptionArea} rows={4} placeholder="Description" value={disc} onChange = {(e)=>{setDisc(e.target.value); e.target.style.backgroundColor = "white"}}/>
            </div>
            <div>
              <button className={styles.submitButton} onClick={handleSubmit}>Submit Feedback</button>
            </div>
            
          </Modal>
        </div>
    </nav>
    <div className={styles.isMobile}>
     <Search 
        placeholder="Search a song of your choice"
        searchData={searchData = []}
      />
      </div>
    </>
  );
}

export default Navbar;
