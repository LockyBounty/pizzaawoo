const Subscription = () => (

<div>
    <div><a href="/">Retour</a></div>
    <h2>INSCRIPTION</h2>
    Déjà un compte ? <a href="./Login">Se connecter</a>
    <form onSubmit={handleSubmit} method="post" name="login1">
        <Email />
        <Pass />
        <ConfirmPass />
        <button type="submit">Valider</button>
    </form>
    
</div>
);

const Email = () => (
    <div>
        <input type="email" name="email" id="email2"/>
    </div>
);

const Pass = () => (
    <div>
        <input type="password" name="pass" id="pass2"/>
    </div>
);

const ConfirmPass = () => (
    <div>
        <input type="password" name="confirmPass" id="confirmPass2"/>
    </div>
);

function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target[0].value)
}


export default Subscription;