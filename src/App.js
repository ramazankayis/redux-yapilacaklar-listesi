import React, { useState } from 'react';
import './styles.css';
import { connect } from 'react-redux';
import * as index from './actions/index';
import { bindActionCreators } from 'redux';

const App = (props) => {
  const [text, setText] = useState('');

  return (
    <div className="App">
      <h1>Yapılacaklar Listesi</h1>
      <div className="ekleme_formu">
        <input
          placeholer="listeye ekle"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          onClick={() => {
            setText('');
            props.actions.listeyeEkle(text);
          }}
        >
          Ekle
        </button>
      </div>
      <div className="liste">
        {props.liste.map((item, index) => (
          <div
            onClick={() => {
              props.actions.isaretle(item.id);
              console.log('item.id=', item.id);
              console.log('tamamlandi=', item.tamamlandi);
            }}
            key={index}
            className={item.tamamlandi ? 'yapildi' : ''}
          >
            {item.baslik}
          </div>
        ))}
      </div>
      <button onClick={() => props.actions.temizle()} className="temizle">
        Tamamlananları Temizle
      </button>
    </div>
  );
};
const mapStateToProps = (state) => ({
  liste: state.liste,
});

const mapDispatchToProps = (dispatch) => ({
  actions: {
    listeyeEkle: bindActionCreators(index.listeyeEkle, dispatch),
    isaretle: bindActionCreators(index.isaretle, dispatch),
    temizle: bindActionCreators(index.temizle, dispatch),
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
