import * as React from 'react';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog'
import { Button, Link, Paper, Container, TextField } from '@mui/material';

export const SubscribeModal = (subscribeProps) => {
    const { open, setOpen } = subscribeProps;

    return (
        <Dialog onClose={() => setOpen(false)} open={open}>
            <Paper>
                <Container sx={{backgroundColor: '#A57AFF'}} textAlign="center">
                    <Typography component="h2" variant="h4" align="center">
                        Subscribe
                    </Typography>
                    <form style={{border:'1, solid #ccc',padding:3,textAlign:'center'}} action="https://tinyletter.com/crispy52" method="post" target="popupwindow" onsubmit="window.open('https://tinyletter.com/crispy52', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true">
                        <Typography variant='h5'>
                        <label htmlFor="tlemail">Enter your email address</label>
                        </Typography>
                        <TextField type="text" name="email" id="tlemail" placeholder="bitcoiner@somewhere.com" />
                        <input type="hidden" value="1" name="embed"/>
                        <Button fullWidth variant="contained" type="submit">
                            Subscribe
                        </Button>
                        <Typography component="p" variant="body2">powered by {' '}
                            <Link href="https://tinyletter.com" target="_blank">
                                TinyLetter
                            </Link>
                        </Typography>
                    </form>

                </Container>

            </Paper>
        </Dialog>
    )

}