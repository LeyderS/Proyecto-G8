import React from 'react';
import './PostFeed.css';

const PostFeed = () => {
    return (
        <div className="post-feed">
            <h2>Publicaciones Recientes</h2>
            <div className="post">
                <div className="post-header">
                    <img src="AVH.jpg" alt="User Avatar" />
                    <div>
                        <h3>Carlos Lopéz</h3>
                        <span>Hace 2 horas</span>
                    </div>
                </div>
                <p>“No te preocupes por el fracaso. Sólo debes acertar una vez.”</p>
                <div className="post-footer">
                    <button>Me gusta</button>
                    <button>Comentar</button>
                </div>
            </div>
            <div className="post">
                <div className="post-header">
                    <img src="AVH.jpg" alt="User Avatar" />
                    <div>
                        <h3>Carlos Lopéz</h3>
                        <span>Hace 2 horas</span>
                    </div>
                </div>
                <p>“No te preocupes por el fracaso. Sólo debes acertar una vez.”</p>
                <div className="post-footer">
                    <button>Me gusta</button>
                    <button>Comentar</button>
                </div>
            </div>
            <div className="post">
                <div className="post-header">
                    <img src="AVH.jpg" alt="User Avatar" />
                    <div>
                        <h3>Carlos Lopéz</h3>
                        <span>Hace 2 horas</span>
                    </div>
                </div>
                <p>“No te preocupes por el fracaso. Sólo debes acertar una vez.”</p>
                <div className="post-footer">
                    <button>Me gusta</button>
                    <button>Comentar</button>
                </div>
            </div>
            <div className="post">
                <div className="post-header">
                    <img src="AVH.jpg" alt="User Avatar" />
                    <div>
                        <h3>Carlos Lopéz</h3>
                        <span>Hace 2 horas</span>
                    </div>
                </div>
                <p>“No te preocupes por el fracaso. Sólo debes acertar una vez.”</p>
                <div className="post-footer">
                    <button>Me gusta</button>
                    <button>Comentar</button>
                </div>
            </div>
        </div>
    );
};

export default PostFeed;