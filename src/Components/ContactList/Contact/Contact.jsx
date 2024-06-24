import css from "./Contact.module.css";

const Contact = ({ contact, onDelete }) => {
  return (
    <div>
      <li className={css.contactItem}>
        <p>
          {contact.name}: {contact.number}
        </p>
        <button className={css.delete} onClick={onDelete}>
          Delete
        </button>
      </li>
    </div>
  );
};

export default Contact;
