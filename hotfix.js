// another js library for project 003

function send(packet)
{
	if (packet != null)
	{
		var server = new Server("Connecion Information");
		var client = new Client();
		client.Connect(server);
		
		if (client.Connected == true)
		{
			client.Send(packet);
		}
		
		client.Dispose();
		server.Dispose();
	}
}
