import './EndMessage.css';

const EndMessage = ({ message = 'No more content to load' }) => {
  return (
    <div className="end-message">
      {message}
    </div>
  );
};

export default EndMessage;
