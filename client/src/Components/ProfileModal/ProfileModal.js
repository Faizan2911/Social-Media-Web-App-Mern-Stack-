import { Modal, useMantineTheme } from '@mantine/core';

function ProfileModal({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();

  return (
    <>
      <Modal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        size="55%"
        overlayProps={{
          color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2],
          opacity: 0.55,
          blur: 3,
        }}
      >


        <form className='infoForm'>

          <h3>Update Your info</h3>

          <div>
            <input type="text" placeholder='First Name' className='infoInput' name="firstname" />
            <input type="text" placeholder='Last Name' className='infoInput' name="lastname" />
          </div>

          <div>
            <input type="text" placeholder='Works At' className='infoInput' name="workAT" />
          </div>

          <div>
            <input type="text" placeholder='Lives in' className='infoInput' name="livesIn" />
            <input type="text" placeholder='Country' className='infoInput' name="country" />
          </div>

          <div>
            <input type="text" placeholder='RelationShip Status' className='infoInput' name="relationShip" />
          </div>

          <div>
            <h5>Profile Image</h5>
            <input type="file" name='profileImg' />
            <h5>Cover Image</h5>
            <input type="file" name='coverImg' />
          </div>

          <button className='button infoButton'>Update</button>
        </form>


      </Modal>

    </>
  );
}


export default ProfileModal