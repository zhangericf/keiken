package com.keiken.viaJava;

import com.keiken.viaJava.factories.MessageSupportFactory;
import com.keiken.viaJava.providers.MessageProvider;
import com.keiken.viaJava.renderers.MessageRenderer;

public class Application {
	public Application(String... args) {
		MessageRenderer mr =
				MessageSupportFactory.getInstance().getMessageRenderer();
		MessageProvider mp =
				MessageSupportFactory.getInstance().getMessageProvider();
		mr.setMessageProvider(mp);
		mr.render();
	}
}
