import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="my-8">
        <div className="cards grid grid-cols-3 gap-4">
          <div className="card p-4">
            <h3 className="font-semibold">About:</h3>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate id voluptas ab perferendis laborum. Alias ut nulla
              nesciunt a corrupti fugiat magni facilis laboriosam fuga
              cupiditate maxime, exercitationem quia animi?
            </p>
          </div>
          <div className="card p-4">
            <h3 className="font-semibold">Join Our Community:</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              velit dolorum voluptate aut alias sunt fuga, odit reiciendis odio
              corrupti beatae eum accusamus tenetur atque praesentium natus
              maxime repellendus fugiat.
            </p>
          </div>
          <div className="card p-4">
            <h3 className="font-semibold">Partner with Us:</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et esse
              illo similique, odit placeat dignissimos atque accusantium
              voluptate nesciunt cum pariatur necessitatibus! Eligendi
              perspiciatis perferendis natus a id. Beatae, repellendus!
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer