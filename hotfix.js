// another js library for project 003

function send(packet)
{
	var status = null;
	
	if (packet != null)
	{
		var server = new Server("Connecion Information");
		var client = new Client();
		client.Connect(server);
		
		if (client.Connected == true)
		{
<<<<<<< HEAD
			status = client.Send(packet);
			
			/*switch (status) // 2 - received pending processing, 3 - rejected (size), 4 - rejected(format), 5 - accepted and processed, 6 - network unavailable
=======
			var status = client.Send(packet);
			
			switch (status) // 2 - received pending processing, 3 - rejected (size), 4 - rejected(format), 5 - accepted and processed, 6 - network unavailable
>>>>>>> c3ce4e4b1cfd03e0902857d6ec5fc66d56250a58
			{
				// the packet was received and processed successfully
				case 5:
				{
					break;
				}
				default:
				{
					// 
				}
<<<<<<< HEAD
			}*/
		}
		
		if (client != null)
		{
			client.Dispose();
		}
		
		if (server != null)
		{
			server.Dispose();
		}
	}
	return status;
}
