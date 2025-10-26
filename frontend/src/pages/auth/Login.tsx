const styles = {
  card: {
    backgroundColor: '#1A1A1B',
    borderRadius: '8px',
    padding: '24px',
    width: '350px',
    display: 'flex',
    flexDirection: 'column' as const,
    fontFamily: 'Arial, sans-serif',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  title: {
    color: '#EEEEEE',
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'left' as const,
    marginBottom: '24px',
  },
  input: {
    backgroundColor: '#272729',
    border: '1px solid #343536',
    borderRadius: '4px',
    color: '#EEEEEE',
    padding: '12px',
    width: '100%',
    boxSizing: 'border-box' as const, // Makes padding not affect width
    marginBottom: '16px',
    fontSize: '14px',
  },
  forgotLink: {
    color: '#4F93E0',
    fontSize: '12px',
    textDecoration: 'none',
    textAlign: 'left' as const,
    marginBottom: '24px',
  },
  loginButton: {
    backgroundColor: '#0090FF', // Disabled/dimmed color
    border: 'none',
    borderRadius: '20px',
    color: 'white', // Dimmed text
    padding: '12px',
    width: '100%',
    fontSize: '14px',
    fontWeight: 'bold' as const,
    cursor: 'pointer' as const, // Change to 'not-allowed' if actually disabled
  },
};

const Login = () => {
  return (
    <div style={styles.card}>
      <h2 style={styles.title}>Log In</h2>
      
      <input
        type="text"
        placeholder="Email or username"
        style={styles.input}
      />
      
      <input
        type="password"
        placeholder="Password"
        style={styles.input}
      />
      
      <a href="#" style={styles.forgotLink}>
        Forgot password?
      </a>
      
      <button style={styles.loginButton}>
        Log In
      </button>
    </div>
  )
}

export default Login